// b et p surligner différentes color

// ex

// text de la page
var chaine = "Lorem, ipsumb dolor sit amet consectetur adipisicing elit. A omnis minus iste iusto magni vitae totam suscipit doloribus quod fuga? Dolorem fuga voluptates soluta, quasi repellat deleniti aut ea ipsa Possimus mollitia saepe, nostrum, necessitatibus totam iste sed, non at repellat repudiandae quis eligendi. At harum quisquam enim, illum quis porro, cupiditate voluptates iusto sed tempore perspiciatis dignissimos quasi omnis.Facere minus maiores repellat temporibus, eum et consequuntur veniam voluptatibus ipsam molestias consectetur reiciendis fugiat dolore explicabo laudantium doloribus quo perferendis suscipit optio. Excepturi numquam, adipisci quod enim sequi veniam.Sit quas iure ullam aut sed numquam eligendi alias ipsa quibusdam esse, ex omnis. Nulla beatae modi reiciendis ullam ad saepe. Officia exercitationem repellat voluptatibus. Unde ad impedit repudiandae ullam.Quibusdam consequatur doloremque culpa voluptate velit. Velit amet rerum, quaerat voluptates at, illo voluptatibus beatae expedita laborum, asperiores totam exercitationem itaque? Magnam animi neque suscipit totam tenetur laboriosam ipsum bnemo.";
/* var reg=new RegExp("(b)", "g");
console.log("Chaîne d'origine : " + chaine);
console.log("Chaîne traitée : " + chaine.replace(reg,"<span style='background-color:yellow'>$1</span>") + "<br>"); */
var chaineSpan = chaine.replace('b', '===b===');
console.log(chaineSpan);