FROM nginx

# prepare a user which runs everything locally! - required in child images!
# RUN useradd --user-group --create-home --shell /bin/false app

RUN apt-get update
RUN apt-get install -y build-essential libssl-dev curl

RUN curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh -o install_nvm.sh

RUN bash install_nvm.sh

ENV NVM_DIR=/root/.nvm

RUN [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

RUN echo "source ~/.profile" >> /etc/bash.bashrc

RUN /bin/bash --login -c "nvm install 6.10"

RUN /bin/bash --login -c "nvm alias default 6.10"

WORKDIR /usr/share/nginx/html

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
ADD ./package.json /usr/share/nginx/html/

RUN /bin/bash --login -c "nvm use default && npm install"

# RUN chown -R app:app $HOME/*

# USER app
# WORKDIR $HOME/$APP_NAME

ADD ./dist/dev /usr/share/nginx/html/

ADD ./node_modules/.tmp/ /usr/share/nginx/html/node_modules/.tmp/

COPY ./.docker/udcregistry/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
