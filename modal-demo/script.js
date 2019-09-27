var MyModal = (function() {

    function isElement(el) {
        if ((typeof el === "object") && (el instanceof Element || el instanceof HTMLDocument)) {
            return true;
        }
        return false;
    }

    function createModal(modal, openButton) {
        if (typeof modal === "string") modal = document.querySelector(modal);
        if (typeof openButton === "string") openButton = document.querySelector(openButton);
        if (!isElement(modal) || !isElement(openButton)) {
            console.error("Invalid arguments");
            return;
        }

        var closeButton = modal.querySelector(".close");
        if (!closeButton) {
            console.error('Missing close button element with "close" class');
            return;
        }

        var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        function openModal() {
            document.body.style.overflowY = "hidden";
            document.body.style.height = "100vh";
            document.body.style.paddingRight = scrollbarWidth + "px";
            modal.classList.add("opened");
        }

        function closeModal() {
            document.body.style.overflowY = "";
            document.body.style.height = "";
            document.body.style.paddingRight = "";
            modal.classList.remove("opened");
        }

        openButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);
        window.addEventListener("click", function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    return {
        createModal
    }

})();