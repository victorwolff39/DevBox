const LOCALES = {
  en: {
    // Logo
    "logo.title": "⬡ Alerok's DevBox",
    "logo.subtitle": "v1.0 · dev tools",

    // Sidebar
    "nav.home": "Home",
    "nav.textCode": "Text & Code",
    "nav.base64": "Base64",
    "nav.url": "URL Encode",
    "nav.json": "JSON Format",
    "nav.case": "Case Converter",
    "nav.regex": "Regex Tester",
    "nav.hashSecurity": "Hash & Security",
    "nav.hash": "Hash",
    "nav.uuid": "UUID",
    "nav.jwt": "JWT Decode",
    "nav.utilities": "Utilities",
    "nav.brasil": "🇧🇷 Brasil",
    "nav.brasil_docs": "CPF / CNPJ",
    "nav.timestamp": "Timestamp",
    "nav.color": "Color",
    "nav.lorem": "Lorem Ipsum",
    "nav.diff": "Text Diff",
    "nav.counter": "Counter",

    // Topbar (toolInfo)
    "tool.home.title": "🏠 Alerok's DevBox",
    "tool.home.desc": "// select a tool from the sidebar",
    "tool.base64.title": "🔤 Base64",
    "tool.base64.desc": "// encode and decode Base64",
    "tool.url.title": "🔗 URL Encode/Decode",
    "tool.url.desc": "// encode and decode URLs",
    "tool.json.title": "{ } JSON Formatter",
    "tool.json.desc": "// format, validate and minify JSON",
    "tool.case.title": "Aa Case Converter",
    "tool.case.desc": "// convert between naming conventions",
    "tool.regex.title": "✱ Regex Tester",
    "tool.regex.desc": "// test regular expressions with live highlight",
    "tool.hash.title": "🔐 Hash Generator",
    "tool.hash.desc": "// MD5, SHA-1, SHA-256, SHA-512",
    "tool.uuid.title": "🆔 UUID Generator",
    "tool.uuid.desc": "// random UUID v4 generator",
    "tool.jwt.title": "🪙 JWT Decoder",
    "tool.jwt.desc": "// decode JWT tokens without verifying signature",
    "tool.timestamp.title": "⏱ Timestamp Converter",
    "tool.timestamp.desc": "// convert between Unix timestamp and date",
    "tool.color.title": "🎨 Color Converter",
    "tool.color.desc": "// convert between HEX, RGB and HSL",
    "tool.lorem.title": "📝 Lorem Ipsum",
    "tool.lorem.desc": "// placeholder text generator",
    "tool.diff.title": "⚡ Text Diff",
    "tool.diff.desc": "// compare two texts line by line",
    "tool.counter.title": "🔢 Text Counter",
    "tool.counter.desc": "// words, characters, lines and more",
    "tool.brasil.title": "🇧🇷 CPF / CNPJ",
    "tool.brasil.desc": "// generate valid Brazilian CPF and CNPJ numbers",

    // Home panel
    "home.subtitle": "// 15 tools for your everyday dev workflow",
    "home.base64.desc": "Encode and decode Base64",
    "home.url.desc": "Encode and decode URLs",
    "home.json.desc": "Format and validate JSON",
    "home.case.desc": "camelCase, snake_case and more",
    "home.regex.desc": "Test regular expressions",
    "home.hash.desc": "MD5, SHA-1, SHA-256",
    "home.uuid.desc": "UUID v4 generator",
    "home.jwt.desc": "Decode JWT tokens",
    "home.timestamp.desc": "Convert Unix timestamps",
    "home.color.desc": "HEX, RGB, HSL converter",
    "home.lorem.desc": "Placeholder text generator",
    "home.diff.desc": "Compare two texts",
    "home.brasil.desc": "Brazilian document generator",

    // Common
    "common.copy": "copy",
    "common.copied": "✓ copied",
    "common.clear": "Clear",
    "common.encode": "Encode",
    "common.decode": "Decode",
    "common.generate": "Generate",
    "common.output": "Output",
    "common.error": "Error",

    // Base64
    "base64.inputLabel": "Input text",
    "base64.inputPlaceholder": "Enter text to encode as Base64...",
    "base64.encodedLabel": "Base64 input",
    "base64.decodePlaceholder": "Paste Base64 to decode...",
    "base64.errorInvalid": "Error: invalid Base64",

    // URL
    "url.encodePlaceholder": "https://example.com/search?q=hello world&lang=en",
    "url.decodePlaceholder": "https%3A%2F%2Fexample.com%3Fq%3Dol%C3%A1%20mundo",
    "url.errorInvalid": "Error: invalid URL",

    // JSON
    "json.inputLabel": "JSON input",
    "json.inputPlaceholder": '{"name":"John","age":30,"active":true}',
    "json.format": "Format",
    "json.minify": "Minify",
    "json.valid": "✓ valid",
    "json.invalid": "✗ invalid",
    "json.minified": "✓ minified",

    // Case
    "case.inputLabel": "Input text",
    "case.placeholder": "my variable name here...",

    // Regex
    "regex.patternLabel": "Regular Expression",
    "regex.flagsLabel": "Flags",
    "regex.testLabel": "Test text",
    "regex.testPlaceholder": "Paste your text here...",
    "regex.validRegex": "✓ valid regex",
    "regex.error": "✗ error",
    "regex.noMatches": "no matches",
    "regex.match": "match",
    "regex.matches": "matches",

    // Hash
    "hash.inputLabel": "Text to hash",
    "hash.placeholder": "Enter text...",
    "hash.generate": "Generate Hashes",

    // UUID
    "uuid.quantityLabel": "Quantity",
    "uuid.generate": "Generate UUIDs",

    // JWT
    "jwt.inputLabel": "JWT Token",
    "jwt.placeholder": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "jwt.mustHave3Parts": "JWT must have 3 parts separated by dots",
    "jwt.header": "Header",
    "jwt.payload": "Payload",
    "jwt.signature": "Signature",
    "jwt.expired": "⚠ expired",
    "jwt.valid": "✓ valid",
    "jwt.signatureNotVerified": "⚠ Signature not verified (no secret key)",

    // Timestamp
    "ts.unixToDate": "Unix → Date",
    "ts.dateToUnix": "Date → Unix",
    "ts.now": "⏱ Now",
    "ts.refresh": "↻ Refresh",
    "ts.unixSeconds": "Unix (seconds)",
    "ts.unixMs": "Unix (ms)",
    "ts.iso8601": "ISO 8601",
    "ts.saoPaulo": "São Paulo (BRT)",
    "ts.utc": "UTC",
    "ts.relative": "Relative",
    "ts.invalidDate": "Invalid date",
    "ts.datePlaceholder": "2024-03-27 12:00:00",
    "ts.inTheFuture": "in the future",
    "ts.secondsAgo": "seconds ago",
    "ts.minutesAgo": "minutes ago",
    "ts.hoursAgo": "hours ago",
    "ts.daysAgo": "days ago",

    // Color
    "color.inputLabel": "Color (HEX, RGB or HSL)",
    "color.placeholder": "#7c5cfc or rgb(124,92,252)",
    "color.preview": "Aa Preview",
    "color.light": "light background",
    "color.dark": "dark background",

    // Lorem
    "lorem.typeLabel": "Type",
    "lorem.quantityLabel": "Quantity",
    "lorem.words": "Words",
    "lorem.sentences": "Sentences",
    "lorem.paragraphs": "Paragraphs",

    // Diff
    "diff.textA": "Text A",
    "diff.textB": "Text B",
    "diff.compare": "Compare",
    "diff.added": "+ added",
    "diff.removed": "- removed",
    "diff.noDifferences": "no differences",
    "diff.originalPlaceholder": "Original text...",
    "diff.modifiedPlaceholder": "Modified text...",

    // Brasil
    "brasil.cpf": "CPF",
    "brasil.cnpj": "CNPJ",
    "brasil.withPunct": "With punctuation",
    "cpf.quantityLabel": "Quantity",
    "cpf.generate": "Generate CPFs",
    "cnpj.quantityLabel": "Quantity",
    "cnpj.generate": "Generate CNPJs",

    // Counter
    "counter.inputLabel": "Text to analyze",
    "counter.placeholder": "Paste your text here...",
    "counter.characters": "Characters",
    "counter.charsNoSpace": "Chars (no space)",
    "counter.words": "Words",
    "counter.lines": "Lines",
    "counter.sentences": "Sentences",
    "counter.paragraphs": "Paragraphs",
    "counter.uniqueWords": "Unique words",
    "counter.readTime": "Read time",
    "counter.bytes": "Bytes (UTF-8)",
  },
};

let currentLocale = 'en';

function t(key) {
  return LOCALES[currentLocale]?.[key] ?? key;
}

function setLocale(lang) {
  currentLocale = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  // Re-render toolInfo for current tool
  if (typeof currentTool !== 'undefined') {
    const titleKey = `tool.${currentTool}.title`;
    const descKey = `tool.${currentTool}.desc`;
    document.getElementById('topTitle').textContent = t(titleKey);
    document.getElementById('topDesc').textContent = t(descKey);
  }
}