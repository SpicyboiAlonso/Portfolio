<<<<<<< HEAD
$(function(){
    $(`.tabs-panels .tabs li`).on('click', function() {
        let $panel = $(this).closest(`.tabs-panels`);
        
        $panel.find(`.tabs li.active`).removeClass('active');
        $(this).addClass(`active`);

        // find the panel we want to show

        let panelToShow = $(this).attr('rel')

        // hide the current one 

        $panel.find(`.panel.active`).slideUp(300, showNextPanel)

        // show the next aonel

        function showNextPanel(){
            $(this).removeClass(`active`)
        
            $(`#${panelToShow}`).slideDown(300, function(){
                $(this).addClass(`active`)
            })
        }
    })
=======
$(function(){
    $(`.tabs-panels .tabs li`).on('click', function() {
        let $panel = $(this).closest(`.tabs-panels`);
        
        $panel.find(`.tabs li.active`).removeClass('active');
        $(this).addClass(`active`);

        // find the panel we want to show

        let panelToShow = $(this).attr('rel')

        // hide the current one 

        $panel.find(`.panel.active`).slideUp(300, showNextPanel)

        // show the next aonel

        function showNextPanel(){
            $(this).removeClass(`active`)
        
            $(`#${panelToShow}`).slideDown(300, function(){
                $(this).addClass(`active`)
            })
        }
    })
>>>>>>> 4eea53009daae67610b20b8fd89272796450c0c6
})