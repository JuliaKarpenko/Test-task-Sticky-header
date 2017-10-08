var containers = document.getElementsByClassName('container');

if (containers.length > 0) {
	addContent(containers[0]);

	var stickyHolder = initStickyHolder(containers[0], document.querySelectorAll("#header"));
	stickyHolder.setup();

	var btnInit = document.getElementById("btnInit");
	btnInit.onclick = stickyHolder.initialize;

	var btnDisable = document.getElementById("btnDisable");
	btnDisable.onclick = stickyHolder.disable;	
}

//add content to container that would be scrolled
function addContent(container) {				
	for ( i = 0; i <= 99; i++) {
		var itemBox = document.createElement('div');

		var header = document.createElement("div");
		header.id = "header";
		header.className = "header";
		header.innerHTML = "<div>Headline " + +(i + 1)  + "</div>";
		header.style.backgroundColor = getRandomColor();

		var textBox = document.createElement("div");
		textBox.className = "textBox";

		textBox.innerHTML = "<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n\
		totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,\n\
		sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam \n\
		eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodin\n\
		consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus\n\
		et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,\n\
		qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, \n\
		quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et\n\
		voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores \n\
		repellat.</div>"

		itemBox.appendChild(header);
		itemBox.appendChild(textBox);

		container.appendChild(itemBox);
	}
}

// set random color to background
function getRandomColor() {			
	var randomRed = getRandomInt(0, 255);
	var randomGreen = getRandomInt(0, 255);
	var randomBlue = getRandomInt(0, 255);
	return 'rgb('+ randomRed + ',' + randomGreen + ',' + randomBlue +')';
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}