// Sidebar:

const Sidebar = document.getElementById("mySidebar");
const Body = document.querySelectorAll("body");
const SidebarShadow = document.getElementById("sidebarShadow")

function SidebarOpen () {
	Sidebar.classList.remove("close");
	Sidebar.classList.add("open");
	SidebarShadow.classList.remove("close");
	SidebarShadow.classList.add("open");
}

function SidebarClose () {
	Sidebar.classList.remove("open");
	Sidebar.classList.add("close");
	SidebarShadow.classList.remove("open");
	SidebarShadow.classList.add("close");
}

function SidebarBut() {
	if (Sidebar.classList.contains("close")) {
		SidebarOpen ();
	} 
	else if (Sidebar.classList.contains("open")) {
		SidebarClose ();
	}
	else {
		SidebarOpen();
	}
}

function SidebarForciblyClose() {
	if (Sidebar.classList.contains("open")) {
		SidebarClose ();
	}
}

//Theme selector:

const LightThemeButton = document.getElementById("LightModeButton");
const NightThemeButton = document.getElementById("NightModeButton");
const AutoThemeButton = document.getElementById("AutoModeButton");
const html = document.documentElement;

function LightModeSelect() {
	LightThemeButton.classList.add("selected")
	NightThemeButton.classList.remove("selected")
	AutoThemeButton.classList.remove("selected")

	html.className = 'LightMode'
}

function NightModeSelect() {
	LightThemeButton.classList.remove("selected")
	NightThemeButton.classList.add("selected")
	AutoThemeButton.classList.remove("selected")

	html.className = 'NightMode'
}

function AutoModeSelect() {
	LightThemeButton.classList.remove("selected")
	NightThemeButton.classList.remove("selected")
	AutoThemeButton.classList.add("selected")

	html.className = 'AutoMode'
}