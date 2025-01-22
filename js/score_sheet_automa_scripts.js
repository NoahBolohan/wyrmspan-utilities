// Show ravel mode row
$(document).ready(

    function () {

        $("#col_ravel_mode_checkbox").change(
            function () {
                if ($("#col_ravel_mode_checkbox").is(":checked")) {

                    custom_show_div("#cell_automa_dragon_guild_fixed_vp");

                    $("#cell_dragon_guild_fixed_vp").text(
                        "Dragon guild (fixed VP)"
                    );

                    $("#cell_dragon_guild_fixed_vp").prop(
                        "requried",
                        true
                    );
                } 
                else {

                    custom_hide_div("#cell_automa_dragon_guild_fixed_vp");

                    $("#cell_dragon_guild_fixed_vp").text("");

                    ("#cell_dragon_guild_fixed_vp").prop(
                        "requried",
                        false
                    );

                    $("#cell_automa_dragon_guild_fixed_vp").val("");

                    recompute_automa_total_score();
                }
            }
        )
    }
)