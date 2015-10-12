# Pickstarter

<!-- [Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: -->

## Minimum Viable Product

Pickstarter is a web application inspired by Kickstarter which allows musical artists to fundraise for tours, albums, or other musical endeavors. Pickstarter is built using Ruby on Rails
and React.js. Pickstarter allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create and read projects
- [ ] Search projects by genre
- [ ] Back projects
- [ ] Upload pictures and sound clips for their projects
- [ ] View their own profile page

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Genre Model, Project Model, and JSON API (2 days)

During Phase 1, I will first implement user signup and authentication. After logging in, users will be redirected to the home page, which will later hold the genres index. I will also add the genre and project models, and I will set up the JSON API for projects and genres.

[Details][phase-one]

### Phase 2: Flux Architecture and Project Create/Read (2.5 days)

In phase 2, I will first set up the Flux architecture and React Router. I will add the necessary actions and ApiUtil methods for the Genres and Projects. Then I will add the Stores for Genres and Projects, and finally the views for the genres index, genre show page (which holds the index for the projects under that genre), project show page, and the project form to post new projects. I will style these with Bootstrap.

[Details][phase-two]

### Phase 3: Contributions and User Profile (2 days)

In phase 3, I will add the Contribution model and the Contribution JSON API. Contributions belong to a user and a project. On each project's show page, there will be a link to a contribution form. I will also add a profile page for the current user so they can view their posted projects and the projects they have backed. Other users' profile pages will not be visible to the current user.

[Details][phase-three]

### Phase 4: Allow Photo and Music Clip Uploads in Project Form (1.5 days)

Phase 4 expands the project form to allow an optional project photo and music clip to be uploaded. These will be added to the project show page and styled.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1 day)

In phase 6, I will clean up the style of my page and add seed data.

### Bonus Features (TBD)
- [ ] Users can edit and delete their projects before the project deadline
- [ ] Prettify transitions
- [ ] Rewards for specific pledge amounts
- [ ] Allow backers to comment on projects

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
