angular.module("lightAccordion", [])

	.run(["$templateCache", function($templateCache){
		var lightAccordion = '<div class="light-accordion">\
			<div class="light-accordion-header" ng-click="toggleOpen()">\
				<div class="light-accordion-title" ng-keypress="toggleOpen($event)">\
					{{heading}}\
					<div class="light-accordion-icon"></div>\
				</div>\
			</div>\
			<div class="light-accordion-collapsible">\
				<div class="light-accordion-content" ng-transclude>\
				</div>\
			</div>\
		</div>';
		$templateCache.put("lightAccordionDefaultTpl.html", lightAccordion);
	}])

	.directive("lightAccordion", function() {
		return {
			restrict: "E",
			scope: {
				heading: "@",
				isOpen: "=?"
			},
			transclude: !0,
			replace: !0,
			templateUrl: function(elem, attrs){
				return attrs.lightAccordionTplUrl || "lightAccordionDefaultTpl.html";
			},
			link: function(scope, element){
				var openClass="opened";
				scope.$watch('isOpen', function(value) {
					element.toggleClass(openClass, !!value);
				});

				scope.toggleOpen = function($event) {
				  if (!$event || $event.which === 32) {
					scope.isOpen = !scope.isOpen;
				  }
				};
			}
		}
	});