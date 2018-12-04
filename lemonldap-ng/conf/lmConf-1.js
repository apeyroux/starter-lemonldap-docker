{"portal":"http://auth.sso.local/","oidcOPMetaDataJSON":null,"cfgAuthorIP":"172.29.0.1","oidcRPMetaDataExportedVars":null,"samlIDPMetaDataOptions":null,"oidcOPMetaDataJWKS":null,"nginxCustomHandlers":{},"notificationStorage":"File","casStorageOptions":{},"localSessionStorageOptions":{"default_expires_in":600,"cache_depth":3,"cache_root":"/tmp","directory_umask":"007","namespace":"lemonldap-ng-sessions"},"lwpSslOpts":{},"samlStorageOptions":{},"oidcRPMetaDataOptionsExtraClaims":null,"persistentStorageOptions":{"LockDirectory":"/var/lib/lemonldap-ng/psessions/lock","Directory":"/var/lib/lemonldap-ng/psessions"},"samlSPMetaDataXML":null,"captchaStorageOptions":{},"cfgLog":"","vhostOptions":{"manager.sso.local":{},"starter.sso.local":{}},"notificationStorageOptions":{"dirName":"/var/lib/lemonldap-ng/notifications"},"globalStorageOptions":{"generateModule":"Lemonldap::NG::Common::Apache::Session::Generate::SHA256","LockDirectory":"/var/lib/lemonldap-ng/sessions/lock","Directory":"/var/lib/lemonldap-ng/sessions"},"globalStorage":"Apache::Session::File","demoExportedVars":{"uid":"uid","cn":"cn","mail":"mail"},"post":{"starter.sso.local":{},"manager.sso.local":{}},"grantSessionRules":{},"loginHistoryEnabled":1,"oidcRPMetaDataOptions":null,"authentication":"Demo","oidcStorageOptions":{},"samlIDPMetaDataXML":null,"samlSPMetaDataOptions":null,"reloadUrls":{"reload.sso.local":"http://reload.sso.local/reload"},"timeout":72000,"applicationList":{"0011-cat":{"type":"category","0013-app":{"options":{"description":"The same simple application displaying authenticated user","logo":"thumbnail.png","uri":"http://test2.sso.local/","name":"Application Test 2","display":"auto"},"type":"application"},"catname":"Starter","0012-app":{"type":"application","options":{"name":"Application Starter","display":"auto","description":"A simple application displaying authenticated user","logo":"demo.png","uri":"http://starter.sso.local/"}}},"0018-cat":{"type":"category","0020-app":{"type":"application","options":{"display":"on","name":"Offical Website","logo":"network.png","uri":"http://lemonldap-ng.org/","description":"Official LemonLDAP::NG Website"}},"0019-app":{"type":"application","options":{"name":"Local documentation","display":"on","logo":"help.png","uri":"http://manager.sso.local/doc/","description":"Documentation supplied with LemonLDAP::NG"}},"catname":"Documentation"},"0014-cat":{"0015-app":{"type":"application","options":{"name":"WebSSO Manager","display":"auto","description":"Configure LemonLDAP::NG WebSSO","uri":"http://manager.sso.local/manager.html","logo":"configure.png"}},"0017-app":{"options":{"logo":"database.png","uri":"http://manager.sso.local/sessions.html","description":"Explore WebSSO sessions","display":"auto","name":"Sessions explorer"},"type":"application"},"type":"category","0016-app":{"type":"application","options":{"name":"Notifications explorer","display":"auto","uri":"http://manager.sso.local/notifications.html","logo":"database.png","description":"Explore WebSSO notifications"}},"catname":"Administration"}},"userDB":"Demo","casAttributes":{},"openIdExportedVars":{},"cfgAuthor":"dwho","exportedHeaders":{"starter.sso.local":{"Auth-User":"$uid","UID":"$uid"},"manager.sso.local":{}},"authChoiceModules":{},"oidcServiceMetaDataAuthnContext":{},"whatToTrace":"_whatToTrace","sessionDataToRemember":{},"mailUrl":"http://auth.sso.local/mail.pl","oidcOPMetaDataExportedVars":null,"registerUrl":"http://auth.sso.local/register.pl","cfgDate":1543924416,"persistentStorage":"Apache::Session::File","portalSkinRules":{},"notification":1,"domain":"sso.local","CAS_proxiedServices":{},"ldapExportedVars":{},"googleExportedVars":{},"remoteGlobalStorageOptions":{},"samlIDPMetaDataExportedAttributes":null,"portalSkin":"bootstrap","passwordDB":"Demo","registerDB":"Demo","issuerDBGetParameters":{},"key":"?Cw\\Y}K=W,)$/=7N","samlSPMetaDataExportedAttributes":null,"cookieName":"lemonldap","securedCookie":0,"facebookExportedVars":{},"locationRules":{"manager.sso.local":{"(?#Notifications)/notifications":"$uid eq \"dwho\" or $uid eq \"rtyler\"","(?#Sessions)/sessions":"$uid eq \"dwho\" or $uid eq \"rtyler\"","default":"$uid eq \"dwho\"","(?#Configuration)^/(manager\\.html|conf/)":"$uid eq \"dwho\""},"starter.sso.local":{"default":"accept","(?#New rule)^/new":"accept"}},"dbiExportedVars":{},"slaveExportedVars":{},"localSessionStorage":"Cache::FileCache","macros":{"_whatToTrace":"$_auth eq 'SAML' ? \"$_user\\@$_idpConfKey\" : \"$_user\""},"oidcOPMetaDataOptions":null,"cfgNum":6,"portalSkinBackground":"1280px-Cedar_Breaks_National_Monument_partially.jpg","groups":{},"logoutServices":{},"exportedVars":{"UA":"HTTP_USER_AGENT"},"webIDExportedVars":{}}