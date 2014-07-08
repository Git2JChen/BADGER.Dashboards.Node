(function() {
	'use strict';

	var returnedDashboard = {}; 

	describe('Dashboard Layout', function () { 
		describe('sets component location in row', function() {
			it('component with no span, sets location to 1', function() {
				var componentOne = {};

				var components = [
					componentOne
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentOne.layout.position).to.be(1);
			});

			it('second component in a row with span of 2, sets location to 2', function() {
				var componentOne = { span: 2 };

				var components = [
					{ span: 2 },
					componentOne
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentOne.layout.position).to.be(2);
			});

			it('component with no span starts new row with a location of 1', function() {
				var componentOne = { };

				var components = [
					{ span: 2 },
					{ span: 2 },
					componentOne
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentOne.layout.position).to.be(1);
			});

			it('component that goes over limit of 8 slots starts new row with a location of 1', function() {
				var componentOne = { span: 7 };

				var components = [
					{ span: 2 },
					{ span: 2 },
					componentOne
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentOne.layout.position).to.be(1);
			});
		});

		describe('sets margin', function() {
			it('to nothing for component with no span', function() {
				var componentOne = {};

				var components = [
					componentOne
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentOne.layout.marginRight).to.be(undefined);
			});

			it('to 10px for first component in a row with more than one item', function() {
				var componentOne = { span: 2 };

				var components = [
					componentOne,
					{ span: 2 }
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentOne.layout.marginRight).to.be('10px');
			});

			it('to nothing for last component in a row with more than one item', function() {
				var componentOne = { span: 2 };
				var componentTwo = { span: 2 };

				var components = [
					componentOne,
					componentTwo
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentTwo.layout.marginRight).to.be(undefined);
			});

			it('sets to 10px for first component in second row with more than one item', function() {
				var componentOne = { };
				var componentTwo = { span: 2 };
				var componentThree = { span: 2 };

				var components = [
					componentOne,
					componentTwo,
					componentThree
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components);

				expect(componentTwo.layout.marginRight).to.be('10px');
			});
		});

		describe('sets width', function() {
			it('component with no span to width of container', function() {
				var componentOne = {};

				var components = [
					componentOne
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components, 400);

				expect(componentOne.layout.width).to.be(400);
			});

			it('component with span of 2 to a quarter of the container width', function() {
				var componentOne = { span: 2 };

				var components = [
					componentOne
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components, 400);

				expect(componentOne.layout.width).to.be(400 / 4);
			});

			it('two components with span of 2 to a quarter of the container width mius one margin', function() {
				var componentOne = { span: 2 };
				var componentTwo = { span: 2 };
				var expectedWidth = (400 - 10) / 4;

				var components = [
					componentOne,
					componentTwo
				];

				new TLRGRP.BADGER.Dashboard.Layout().set(components, 400);

				expect(componentOne.layout.width).to.be(expectedWidth);
				expect(componentTwo.layout.width).to.be(expectedWidth);
			});
		});
	});
})();
