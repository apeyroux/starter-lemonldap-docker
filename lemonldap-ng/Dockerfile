FROM coudot/lemonldap-ng

ENV debian_frontend noninteractive

RUN a2enmod fcgid perl alias rewrite proxy proxy_http ssl headers

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
