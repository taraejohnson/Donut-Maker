describe('Have a way to count donuts', () => {
    describe('Can add to donut count', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker();
        })
        
        it('Should start with a click count of 0', () => {
            expect(underTest.clickCount).toBe(0);
        });
        it('Should add one click to the click counter when it records a click', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('Should have a click count of 2 when it records 2 clicks', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
});

describe('Purchase auto-clicker with 100 donuts', () => {
    describe('Can add to auto-clicker count', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker();
        })

        it('Start with auto click count of 0', () => {
            expect(underTest.autoClickCount).toBe(0);
        });

        it('Auto clicker should cost 100 donuts', () => {
            expect(underTest.autoClickCost).toBe(100);
        });

        it('Should add 1 auto-clicker with 100 donuts', () => {
            for (underTest.clickCount = 0; underTest.clickCount <= 100 ; underTest.clickCount++) { 
                underTest.recordClick(); 
            }
            underTest.buyAutoClicker();
            expect(underTest.autoClickCount).toBe(1);
        });
    });
});

describe('Cost of auto-clicker should go up with each purchase', () => {
    let underTest;

        beforeEach(() => {
            underTest = new DonutMaker();
        })

    it('Should increase cost of second auto-clicker by +10%, third auto-clicker by +10%', () => {
        for (underTest.clickCount = 0; underTest.clickCount <= 225 ; underTest.clickCount++) { 
            underTest.recordClick(); 
        }
        underTest.buyAutoClicker();
        expect(underTest.autoClickCost).toBe(110);

        underTest.buyAutoClicker();
        expect(underTest.autoClickCost).toBe(121);
    });
});

describe('Amount of auto-clickers should effect amount of donuts added', () => {
    let underTest;

        beforeEach(() => {
            underTest = new DonutMaker();
        });

    /*it('Donut total should increase by amount of auto-clickers owned', () => {
        for (underTest.clickCount = 0; underTest.clickCount <= 220 ; underTest.clickCount++) { 
            underTest.recordClick(); 
        }

        underTest.buyAutoClicker();
        underTest.buyAutoClicker();

        underTest.activateAutoClickers();
        expect(underTest.clickCount).toBe();
    });*/
});

describe('Should be able to purchase first multiplier with 10 clicks/donuts', () => {
    let underTest;

        beforeEach(() => {
            underTest = new DonutMaker();
        })

    it('Retrieve donut multiplier count', () => {
        expect(underTest.multiplierCount).toBe(0);
        for (underTest.clickCount = 0; underTest.clickCount <= 100 ; underTest.clickCount++) { 
            underTest.recordClick(); 
        }
        underTest.buyMultiplier();
        expect(underTest.multiplierCount).toBe(1);
    });

    it('Add to donut multiplier count', () => {
        for (underTest.clickCount = 0; underTest.clickCount <= 100 ; underTest.clickCount++) { 
            underTest.recordClick(); 
        }
        underTest.buyMultiplier();
        expect(underTest.multiplierCount).toBe(1);
        underTest.buyMultiplier();
        expect(underTest.multiplierCount).toBe(2);
    });

    it('Subtract donut multiplier cost from donut count', () => {
        for (underTest.clickCount = 0; underTest.clickCount <= 100 ; underTest.clickCount++) { 
            underTest.recordClick(); 
        }
        underTest.buyMultiplier();
        expect(underTest.clickCount).toBe(92);
        underTest.buyMultiplier();
        expect(underTest.clickCount).toBe(81);
    });

    it('Increase cost of donut multiplier by 10 percent each purchase', () => {
        for (underTest.clickCount = 0; underTest.clickCount <= 100 ; underTest.clickCount++) { 
            underTest.recordClick(); 
        }
        expect(underTest.multiplierCost).toBe(10);
        underTest.buyMultiplier();
        expect(underTest.multiplierCost).toBe(11);
        underTest.buyMultiplier();
        expect(underTest.multiplierCost).toBe(12.1);
        underTest.buyMultiplier();
        expect(underTest.multiplierCost).toBe(13.31);

    })
});