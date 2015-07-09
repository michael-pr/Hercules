Router.configure({
  layoutTemplate: "layout"
});

Router.route("/", { name: "home" }); //landing

//Router.route("/home", { name: "home" });

// Routines
Router.route("/routines/submit", { name: "routineSubmit" });
Router.route("/routine/:_id", {
  name: "routinePage"
});
