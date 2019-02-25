const format = require("date-fns/format");
const isValid = require("date-fns/is_valid")

interface String {
    formatDate(date: string): string;
}

String.prototype.formatDate = function(date: string) {
    const s: string = String(this);
    return isValid(new Date(s)) ? format(new Date(s), "MMM YYYY") : s;
};
