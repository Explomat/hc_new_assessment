export default function getUrlParams(url, param) {
	if (!url) return null;

	const vars = {};
	url.replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi,
		function cb(m, key, value) {
			vars[key] = value !== undefined ? value : '';
		}
	);

	if (param) return vars[param];
	return vars;
}

