const utils = require('./utils');

test('return current year', () => {
    const currentYear = new Date().getFullYear();
    expect(utils.getFullYear()).toBe(currentYear);
});

test('return footer with isIndex=true', () => {
    const isIndex = true;
    expect(utils.getFooterCopy(isIndex)).toBe("Holberton School");
});

test('return footer with isIndex=false', () => {
    const isIndex = false;
    expect(utils.getFooterCopy(isIndex)).toBe("Holberton School main dashboard");
});

test('return correct latest notification', () => {
    expect(utils.getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});