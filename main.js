const Body = document.querySelectorAll("body");
const Sidebar = document.getElementById("mySidebar");
const Sidenebar = document.getElementById("mySidenebar");

function SidebarBut() {
	if (Sidebar.classList.contains("close")) {
		Sidebar.classList.remove("close");
		Sidebar.classList.add("open");
	} 
	else if (Sidebar.classList.contains("open")) {
		Sidebar.classList.remove("open");
		Sidebar.classList.add("close");
	}
	else {
		Sidebar.classList.add("open");
	}
	if (Sidenebar.classList.contains("open")) {
		Sidenebar.classList.remove("open");
		Sidenebar.classList.add("close");
	}
}

function SidenebarBut() {
	if (Sidenebar.classList.contains("close")) {
		Sidenebar.classList.remove("close");
		Sidenebar.classList.add("open");
	} 
	else if (Sidenebar.classList.contains("open")) {
		Sidenebar.classList.remove("open");
		Sidenebar.classList.add("close");
	}
	else {
		Sidenebar.classList.add("open");
	}
	if (Sidebar.classList.contains("open")) {
		Sidebar.classList.remove("open");
		Sidebar.classList.add("close");
	}
}

function SidebarCl() {
	if (Sidebar.classList.contains("open")) {
		Sidebar.classList.remove("open");
		Sidebar.classList.add("close");
	}
	if (Sidenebar.classList.contains("open")) {
		Sidenebar.classList.remove("open");
		Sidenebar.classList.add("close");
	}
}
