String.prototype.inspect = function() {
  if (JSON)
    return JSON.stringify(this);
  else if (this.quote)
    return this.quote();
  else {
        var c, i, l = this.length, o = '"';
        for (i = 0; i < l; ++i) {
            c = this.charAt(i);
            if (c >= ' ') {
                if (c === '\\' || c === '"') {
                    o += '\\';
                }
                o += c;
            } else {
                switch (c) {
                case '\b':
                    o += '\\b';
                    break;
                case '\f':
                    o += '\\f';
                    break;
                case '\n':
                    o += '\\n';
                    break;
                case '\r':
                    o += '\\r';
                    break;
                case '\t':
                    o += '\\t';
                    break;
                default:
                    c = c.charCodeAt();
                    o += '\\u00' + (~~(c / 16)).toString(16) + (c % 16).toString(16);
                }
            }
        }
        return o + '"';
    }
};
