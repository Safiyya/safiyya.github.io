const format = require("date-fns/format");

interface String {
    formatDate(date: string): string;
}

String.prototype.formatDate = function(date: string) {
    const s: string = String(this);
    return format(new Date(s), "MMM YYYY");
};
