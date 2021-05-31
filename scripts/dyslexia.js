function dislex(str) {
      return str
            .replace(/[b]/g, '===b===')
            .replace(/[d]/g, '===d===')
            .replace(/[B]/g, '===B===')
            .replace(/[D]/g, '===D===')
            .replace(/===b===/g, '<span class="dysb">b</span>')
            .replace(/===d===/g, '<span class="dysd">d</span>')
            .replace(/===B===/g, '<span class="dysb">B</span>')
            .replace(/===D===/g, '<span class="dysd">D</span>');
}
function dislexNodes(nodes) {
      for (let index = 0; index < nodes.childNodes.length; index++) {
            const element = nodes.childNodes[index];
            if (element.nodeType === 3 && !element.textContent.match(/^\s+$/)) {
                  var html = dislex(element.textContent);
                  var newChild = document.createElement('span');
                  newChild.innerHTML = html;
                  nodes.replaceChild(newChild, element);
            }else{
                  dislexNodes(element);
            }
      }
}