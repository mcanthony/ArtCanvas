describe('Rectangle TEST', function() {

    describe('Rectangle.prototype.getTop', function() {

        // Positive

        it('should return 0.5', function() {
            var rectangle = new Rectangle(1, 0.5, 1, 1);

            expect(rectangle.getTop()).toEqual(0.5);
        });

        // Negative

        it('should return 0', function() {
            var rectangle = new Rectangle(1, '', 1, 1);

            expect(rectangle.getTop()).toEqual(0);
        });

    });

});
