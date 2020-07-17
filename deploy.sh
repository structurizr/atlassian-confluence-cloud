export DESTINATION=s3://static.structurizr.com/atlassian-confluence-cloud/

aws s3 cp atlassian-connect.json $DESTINATION --acl public-read
aws s3 cp embed-workspace.html $DESTINATION --acl public-read
aws s3 cp structurizr-confluence.css $DESTINATION --acl public-read
aws s3 cp structurizr-confluence.js $DESTINATION --acl public-read
