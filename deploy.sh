cf push structurizr-confluence -p src -m 256M
cf map-route structurizr-confluence  structurizr.com -n confluence
