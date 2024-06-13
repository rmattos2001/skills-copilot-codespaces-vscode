function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/members/skills.html',
    controller: 'MemberSkillsController',
    controllerAs: 'vm',
    bindToController: true
  };
}