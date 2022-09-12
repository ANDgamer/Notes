const Sidebar = document.getElementById("mySidebar");
const Body = document.querySelectorAll("body");

function SidebarOpen () {
	Sidebar.classList.remove("close");
	Sidebar.classList.add("open");
}

function SidebarClose () {
	Sidebar.classList.remove("open");
	Sidebar.classList.add("close");
}

function SidebarBut() {
	if (Sidebar.classList.contains("close")) {
		SidebarOpen ();
	} 
	else if (Sidebar.classList.contains("open")) {
		SidebarClose ();
	}
	else {
		Sidebar.classList.add("open");
	}
}

function SidebarCl() {
	if (Sidebar.classList.contains("open")) {
		SidebarClose ();
	}
}