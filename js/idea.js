window.onload = function(){
    var simple = document.querySelector(".simple");
    var customized = document.querySelector(".customized");
    var community = document.querySelector(".community");
    var sw = false;

    simple.addEventListener("click",show_desc);
    customized.addEventListener("click",show_desc);
    community.addEventListener("click",show_desc);
    
    //idea 설명 보여주기
    function show_desc(){
        sw = !sw;
        var body = document.querySelector("body");
        var oldClassName = this.getAttribute("class");
        var noHoveringClassName = oldClassName.split(" ",1);
        var h2 = this.querySelector("h2");
        var ideaDesc = this.querySelector(".ideaDesc");
        if(sw){
            body.style.transition = "all 0.5s";
            body.style.backgroundColor = "#9e9e9e";
            this.setAttribute("class", noHoveringClassName);
            this.style.transition = "all 1s ease";
            this.style.zIndex = "100";
            this.style.width = "1310px";
            this.style.height = "850px";
            this.style.textAlign = "left";

            //분기점
            if(this == customized){
                this.style.left = "-460px";
            }else if(this == community){
                this.style.top = "-425px"
                this.style.left = "-460px";
            }
            
            h2.style.transition = "all 1s ease";
            h2.style.lineHeight = "100px";
            h2.style.left = "70px";
            h2.style.top = "30px"

            setTimeout(function(){
                ideaDesc.setAttribute("class", "ideaDesc");
                ideaDesc.style.transition = "all 0.5s ease"
                ideaDesc.style.opacity = "1";
            }, 1000);
        }else{
            // body.style.transition = "all 0.5s";
            body.style.backgroundColor = "#fff";
            ideaDesc.style.opacity = "0";
            setTimeout(function(){
                ideaDesc.setAttribute("class", "ideaDesc hidden");
            },800);
            this.setAttribute("class", noHoveringClassName+" hovering");
            
            //분기점
            if(this == simple){
            this.style.width = "460px";
            this.style.textAlign = "center";
            this.style.zIndex = "0";
            h2.style.lineHeight = "850px";
            h2.style.left = "0";
            h2.style.top = "0";
            }else if(this == customized){
                this.style.textAlign = "center";
                h2.style.lineHeight = "425px";
                h2.style.left = "0";
                h2.style.top = "0";
                this.style.left = "0px";
                this.style.width = "850px";
                this.style.height = "425px";
                this.style.zIndex = "0";
            }else if(this == community){
                this.style.textAlign = "center";
                h2.style.lineHeight = "425px";
                h2.style.left = "0";
                h2.style.top = "0";
                this.style.left = "0px";
                this.style.top = "0px";
                this.style.width = "850px";
                this.style.height = "425px";
                this.style.zIndex = "0";
            }
            
        }
    }
}