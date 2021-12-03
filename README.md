# IITB-ApexAccessibility

## Requirements : 

- Node JS
- MongoDB (Version 4.4 or older)

## Installation Instructions : 

> [For Linux Ubuntu 18.04 LTS]

Setup & Install MongoDB : 

```sh

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt update

apt-cache policy libssl1.0-dev

sudo apt-get install libssl1.0-dev

sudo apt-get install -y mongodb-org=3.4.17 mongodb-org-server=3.4.17 mongodb-org-shell=3.4.17 mongodb-org-mongos=3.4.17 mongodb-org-tools=3.4.17

service mongod start 
```


> [For Other Windows, MAC & Other Linux Versions]


Step-by-step installation steps in Windows, Linux, MAC or docker  : [MongoDB Installation](https://docs.mongodb.com/manual/installation/)


## Clone Project
```sh
git clone https://github.com/Akshatj555/IITB-ApexAccessibility.git

cd IITB-ApexAccessibility/apex_check/
```

## Install Locally:

```sh

npm run install

npm run dev

```

