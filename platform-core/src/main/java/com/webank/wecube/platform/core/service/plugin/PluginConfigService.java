package com.webank.wecube.platform.core.service.plugin;


import com.webank.wecube.platform.core.commons.WecubeCoreException;
import com.webank.wecube.platform.core.domain.plugin.PluginConfig;
import com.webank.wecube.platform.core.domain.plugin.PluginConfigInterface;
import com.webank.wecube.platform.core.domain.plugin.PluginPackageEntity;
import com.webank.wecube.platform.core.jpa.PluginConfigRepository;
import com.webank.wecube.platform.core.jpa.PluginPackageEntityRepository;
import com.webank.wecube.platform.core.jpa.PluginPackageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static com.webank.wecube.platform.core.domain.plugin.PluginConfig.Status.*;
import static com.webank.wecube.platform.core.domain.plugin.PluginPackage.Status.DECOMMISSIONED;
import static com.webank.wecube.platform.core.domain.plugin.PluginPackage.Status.UNREGISTERED;

@Service
@Transactional
public class PluginConfigService {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private PluginPackageRepository pluginPackageRepository;
    @Autowired
    private PluginConfigRepository pluginConfigRepository;
    @Autowired
    private PluginPackageEntityRepository pluginPackageEntityRepository;

    public List<PluginConfigInterface> getPluginConfigInterfaces(int pluginConfigId) {
        return pluginConfigRepository.findAllPluginConfigInterfacesByConfigIdAndFetchParameters(pluginConfigId);
    }

    public PluginConfig savePluginConfig(PluginConfig pluginConfig) throws WecubeCoreException {
        ensurePluginConfigIsValid(pluginConfig);
        Integer packageId = pluginConfig.getPluginPackageId();
        pluginPackageRepository.findById(packageId).ifPresent(pluginConfig::setPluginPackage);
        PluginConfig pluginConfigFromDatabase = pluginConfigRepository.findById(pluginConfig.getId()).get();
        if (ENABLED == pluginConfigFromDatabase.getStatus()) {
            throw new WecubeCoreException("Not allow to update plugin with status: ENABLED");
        }
        pluginConfig.setStatus(DISABLED);

        return pluginConfigRepository.save(pluginConfig);
    }

    private void ensurePluginConfigIsValid(PluginConfig pluginConfig) {
        if (null == pluginConfig.getId() || pluginConfig.getId() < 1) {
            throw new WecubeCoreException("Invalid pluginConfig with id: " + pluginConfig.getId());
        }
        if (!pluginConfigRepository.existsById(pluginConfig.getId())) {
            throw new WecubeCoreException("PluginConfig not found for id: " + pluginConfig.getId());
        }

        Integer entityId = pluginConfig.getEntityId();
        if (null != entityId && entityId.intValue() > 0) {
            Optional<PluginPackageEntity> pluginPackageEntityOptional = pluginPackageEntityRepository.findById(entityId);
            if (!pluginPackageEntityOptional.isPresent()) {
                String errorMessage = String.format("PluginPackageEntity not found for id: [%s] for plugin config: %s", entityId, pluginConfig.getName());
                log.error(errorMessage);
                throw new WecubeCoreException(errorMessage);
            }
        }
    }

    public PluginConfig enablePlugin(int pluginConfigId) {
        if (!pluginConfigRepository.existsById(pluginConfigId)) {
            throw new WecubeCoreException("PluginConfig not found for id: " + pluginConfigId);
        }

        PluginConfig pluginConfig = pluginConfigRepository.findById(pluginConfigId).get();

        if (pluginConfig.getPluginPackage() == null || UNREGISTERED == pluginConfig.getPluginPackage().getStatus() || DECOMMISSIONED == pluginConfig.getPluginPackage().getStatus()) {
            throw new WecubeCoreException("Plugin package is not in valid status [REGISTERED, RUNNING, STOPPED] to enable plugin.");
        }

        ensurePluginConfigIsValid(pluginConfig);
        if (DISABLED != pluginConfig.getStatus()) {
            throw new WecubeCoreException("Not allow to enable pluginConfig with status: ENABLED");
        }
        pluginConfig.setStatus(ENABLED);
        return pluginConfigRepository.save(pluginConfig);
    }

    public PluginConfig disablePlugin(int pluginConfigId) {
        if (!pluginConfigRepository.existsById(pluginConfigId)) {
            throw new WecubeCoreException("PluginConfig not found for id: " + pluginConfigId);
        }

        PluginConfig pluginConfig = pluginConfigRepository.findById(pluginConfigId).get();

        pluginConfig.setStatus(DISABLED);
        return pluginConfigRepository.save(pluginConfig);
    }
    
    public PluginConfigInterface getPluginConfigInterfaceByServiceName(String serviceName) {
        Optional<PluginConfigInterface> pluginConfigInterface = pluginConfigRepository
                .findLatestOnlinePluginConfigInterfaceByServiceNameAndFetchParameters(serviceName);
        if (!pluginConfigInterface.isPresent()) {
            throw new WecubeCoreException(
                    String.format("Plugin interface not found for serviceName [%s].", serviceName));
        }
        return pluginConfigInterface.get();
    }
}