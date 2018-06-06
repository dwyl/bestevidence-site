# Best Evidence-site :bookmark_tabs:

The Best Evidence website - where the latest information on the Best Evidence app, the science behind it
and sign up links can be found.

## Set up

1. Clone this repo onto your machine

```
git clone https://github.com/dwyl/bestevidence-site.git
cd site
```

2. Check you have MongoDB by doing `mongo --version`, otherwise install it. If
   you use Homebrew you can do that by doing `brew install mongodb` or if you use
   npm you can follow the instructions here: https://www.npmjs.com/package/mongodb.
3. Run `npm install` in your command line
4. Add the environment variable to connect with our hosted database to your `.env`
   file. Ask us and we will provide this for you. The environment variables used in the project include the following:

   ```
   AWS_BUCKET
   AWS_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY
   MONGODB_URI
   TEMPLATE_DIRECTORY
   ```

   The project has got a local database that it can run with if you don't have the `.env` variable but you will have to start from scratch to fill it with content.

5. Then set the environment variable by doing `source .env` in your command line.
6. Then do `npm start` and go to http://0.0.0.0:3000/
7. To see the admin view go to http://0.0.0.0:3000/login and enter a username and
   password (provided by us). If you are running the site locally run `node app apostrophe-users:add admin admin` in your command line, you will then be prompted to add a password.

## Recreating the site

If you would like to recreate this site separately you will need to do the following:

1. As above, make sure you have MongoDB
2. Add [mLab](https://mlab.com/) to your Heroku account through resources and add ons.
3. The `MONGODB_URI` is then automatically generated in Heroku's config vars.
4. Setup AWS S3, you can find the following instructions here: https://apostrophecms.org/docs/tutorials/howtos/storing-images-and-files-in-amazon-s3.html
5. If you don't have a username and password for Apostrophe you can set one up by running the following in your command line. This will create an admin account with the ability to read & write to the database, which will allow you to add and remove content.
   ```
   APOS_MONGODB_URI=mongodb://<username>:<password>@ds259258.mlab.com:59258/<username> node app apostrophe-users:add admin admin
   ```

## Guide for site admins

To log in as as an admin go to: https://best-evidence-site.herokuapp.com/login and enter
your username and password. If you do not yet have a username and password ask
another admin to set up an account for you.

Once you have logged in you should be able to see two menus on every page:
<img src="https://user-images.githubusercontent.com/16775804/35848171-fde190e0-0b14-11e8-8e04-78bcf8a9c287.png" width=70px />

<img src="https://user-images.githubusercontent.com/16775804/35848181-071feef4-0b15-11e8-84a7-289ba432cb40.png" width=170px />

Clicking on either menu opens up their options. The 'A' menu has the same options
across all pages, whereas the options of the page menu change according to which
page you are on.

The 'A' menu is an overview of all of a given thing over the site ie. users,
messages sent by the contact form, blog articles etc. Clicking on each category
opens up information about that thing ie. users and gives you the ability to
change them.

**Admins shouldn't need to change much using the page menu**. **It is powerful and
capable of deleting and creating new pages which you do not want to do
accidentally.** There are two main cases in which you may wish to use this menu:

1. If you made a change to a page and want to see what the page looked like
   previously. To do this click on 'Page Versions':

<img src="https://user-images.githubusercontent.com/16775804/35848458-246cd034-0b16-11e8-84ab-8513f384ff43.png" width=150px />

Here you can see recent changes to the page and revert back to them if needs be.
Note: be careful and pay attention when reverting changes.

<img src="https://user-images.githubusercontent.com/16775804/35848520-5a3dbc64-0b16-11e8-9c37-fa4301e80571.png" width=800px />

### Editing content

A lot of the content on the site is editable but not all of it. To see if a
piece of text is editable, when you're logged in as an admin try double clicking
on the field. If it is editable you will see a dotted box appear around it:

<img src="https://user-images.githubusercontent.com/16775804/35848910-b7c528a8-0b17-11e8-8e47-6f31a1023602.png" width=200px />

Then click on the text and you can edit it.

You may also notice these symbols showing when you move around the site:

<img src="https://user-images.githubusercontent.com/16775804/35849016-146471d6-0b18-11e8-91a1-f0a9b040c330.png" width=200px />

They are also a sign that something is editable. Ignore the arrow icon, it is
not in use at the moment and so won't do anything. Rather than deleting something
by clicking the trash can icon, try double clicking the content to get the dotted
box. If you do accidentally click the trash icon and you want to recreate what
you deleted look where it used to be for something like this:

<img src="https://user-images.githubusercontent.com/16775804/35849102-5b3734fe-0b18-11e8-8306-261a66e8e079.png" width=400px />

Click on that and then enter in the text that was there before. You should not
need to delete the field and add it again, normally just double click it to see
the dotted box.
