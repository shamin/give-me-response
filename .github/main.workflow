workflow "Deploy to Heroku" {
  on = "push"
  resolves = "release"
}

action "login" {
  uses = "actions/heroku@master"
  secrets = ["HEROKU_API_KEY"]
  args = "container:login"
}

action "push" {
  uses = "actions/heroku@master"
  needs = "login"
  args = "container:push -a give-me-response web"
  secrets = ["HEROKU_API_KEY"]
}

action "release" {
  uses = "actions/heroku@master"
  needs = "push"
  args = "container:release -a give-me-response web"
  secrets = ["HEROKU_API_KEY"]
}
