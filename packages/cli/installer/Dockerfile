FROM ubuntu
RUN apt update -y
RUN apt-get install -y tzdata
RUN apt install -y nsis curl git
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
RUN npm i -g @oclif/dev-cli yarn
RUN apt install -y apt-utils
RUN apt install -y p7zip-full
#RUN apt install -y p7zip-rar #possible need, require test without
