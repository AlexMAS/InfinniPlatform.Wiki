---
---

function MenuBuilder() {
}

MenuBuilder.prototype.pages = [
	{% for page in site.pages %}
		{
			url: '{{ page.url }}',
			path: '{{ page.path | encoding: "utf-8" }}',
			title: '{{ page.title | replace: "'", "\\'" }}',
			position: {% if page.position %}{{page.position}}{% else %}0{% endif %}
		},
	{% endfor %}
];
