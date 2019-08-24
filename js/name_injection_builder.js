/**
 * @file
 * @brief JS implementation of the Skype name injection builder for Chrome browser.
 */

// create namespace
if (!window.SkypeClick2Call)
{
	window.SkypeClick2Call = {};
}

if (!SkypeClick2Call.NameInjectionBuilder)
{
	SkypeClick2Call.NameInjectionBuilder = {globalNamespace:SkypeClick2Call};

/*	initialized in C++ part
	SkypeClick2Call.NameInjectionBuilder.CSS_NAME_CONTAINER         = "skype_name_container";
	SkypeClick2Call.NameInjectionBuilder.CSS_NAME_HIGHLIGHTING_MARK = "skype_name_mark";
	SkypeClick2Call.NameInjectionBuilder.HIGHLIGHTING_MARK_BEGIN    = " begin_of_the_skype_highlighting";
	SkypeClick2Call.NameInjectionBuilder.HIGHLIGHTING_MARK_END      = "end_of_the_skype_highlighting";
*/
}

SkypeClick2Call.NameInjectionBuilder.CreateInjectionElements = function(range, highlightingClassName, title)
{
	var container = document.createElement('SPAN');
	container.className = "skype_name_container";
	container.dir = "ltr";
	container.tabIndex = "-1";
	range.surroundContents(container);

	var mark_begin_span = document.createElement('SPAN');
	mark_begin_span.className = this.CSS_NAME_HIGHLIGHTING_MARK;
	mark_begin_span.appendChild(document.createTextNode(this.HIGHLIGHTING_MARK_BEGIN));
	container.appendChild(mark_begin_span);

	var highlighting = document.createElement('SPAN');
	highlighting.className = highlightingClassName;
	highlighting.title = title;
	highlighting.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0"));
	container.appendChild(highlighting);

	var mark_end_span = document.createElement('SPAN');
	mark_end_span.className = this.CSS_NAME_HIGHLIGHTING_MARK;
	mark_end_span.appendChild(document.createTextNode(this.HIGHLIGHTING_MARK_END));
	container.appendChild(mark_end_span);

	return {containerElement:container, highlightElement:highlighting};
}

// create META to inform contentscript.js that this file is ready
document.head.appendChild(document.createElement('meta')).name = "name_injection_builder.js";
