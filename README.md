# django-react-tailwind

Simple template for using reactjs and tailwindcss as frontend and django as backend.


## Prerequisite

prerequisite to follow the instruction below.

* node > 16.x
* python > 3.x 
* django > 3.x 

## Setup

```sh
npx degit wichit2s/django-react-tailwind mywebsite
cd mywebsite
```

or 

```sh
git lcone https://github.com/wichit2s/django-react-tailwind mywebsite
rm -rf mywebsite/.git
cd mywebsite
```

## Start Server

* setup database - once

```sh
python manage.py makemigrations
python manage.py migrate
```

* run server

```sh
python manage.py runserver
```

## Start Frontend (watch and rebuild)

```sh
npm --prefix=webapp/frontend run watch
```

or

```sh
cd webapp/frontend
npm run watch
```

## Tools & Credits

* [django](https://www.djangoproject.com/)
* [reactjs](https://reactjs.org/)
* [tailwindcss](https://tailwindcss.com/)
* [django-create-react-app](https://github.com/aamirbhat/django-create-react-app/)
* [npm-watch](https://github.com/M-Zuber/npm-watch/)


