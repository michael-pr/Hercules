Template.home.onRendered(function () {
    $("#btn-routine-submit").on("click", function () {
      Router.go("routineSubmit");
    });
    $(".routine-item").on("click", function () {
      console.log($("span", this).text());
      //var routineId = $("span", this).text();
      //Router.go("routinePage", { _id: routineId });
    });
});

Template.home.helpers({
  noRoutines: function () {
    return false; // TODO
  },
  routines: function () {
    return [1, 2, 3]; // TODO
  }
});

Template.home.events({

});
