import {testSetup} from "../src/test";

describe('test', () => {
    it('true should be true', () => {
        expect(testSetup.isWorking).toBe(true);
    });
});