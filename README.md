# Buckinghamshire Adoption Service

**Changes here automatically deploy to staging, but _not_ production.**

A rails app with a react-powered frontend for the Buckinghamshire adoption service. Makes use of Fae CMS.

It:

- has an interactive quiz that saves the user's answers to localStorage
- uses those saved answers to build a personalised "readiness plan"
- lets the user email that plan to themselves or someone else
- pulls in a dynamic list of adoption information events from Eventbrite
- an interface to manage all that content for users at `/admin`

## Prerequisites

- `node` and `yarn`
- `ruby 2.4.1`
- `rails 5.2`

## Running it locally

1. Clone the repo and install ruby dependencies with `bundle install`
2. Then, install front-end dependencies with `yarn install`
3. Set the environment config as needed:

- `EVENTBRITE_SECRET` to use the Eventbrite API to show events
- `GOVUK_NOTIFY_API_KEY` to use the Notify API to send emails
- `GOVUK_NOTIFY_TEMPLATE_ID` to tell Notify which template to use
- `GA_TRACKING_ID` to send analytics
- `SENTRY_DSN` to send error reports to Sentry

4. Set up the databases with `rake db:setup`
5. Set up FaeCMS with `rake fae:seed_db`
6. `rails s` to start
7. The app will be available on port 3000
8. Go to `/admin` which should now, as long as you completed step 5, take you to set up the first user - go create an admin account and then log in.
9. While the app should be working you will also need to add questions for each of the topics in order for the flow to work.

## Fae CMS

This app uses [FaeCMS](https://faecms.com/) as the CMS, you can find out more about it in [Fae's documentation](https://faecms.com/documentation)

## Deploying to the web

It's designed to work on Heroku, and should deploy there without any special steps.

Make sure to run the `rails db:migrate` command to prepare the database.

It might not do much until some sensible content has been set in the CMS.

## See also

- [GOV.UK Notify API docs](https://www.notifications.service.gov.uk/documentation)
- [Eventbrite API docs](https://www.eventbrite.com/platform/api)
- [Fae CMS docs](https://faecms.com/documentation)
