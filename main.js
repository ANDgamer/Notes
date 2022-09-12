const Sidebar = document.getElementById("mySidebar");
const Body = document.querySelectorAll("body");

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
}

function SidebarCl() {
	if (Sidebar.classList.contains("open")) {
		Sidebar.classList.remove("open");
		Sidebar.classList.add("close");
	}
}
