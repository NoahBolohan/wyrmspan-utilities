// Show ravel mode row
$(document).ready(

    function () {

        $("input[type=radio][name=automa_difficulty]").on(
            "change",
            function () {

                if ($("input[name=automa_difficulty]:checked").val() == "3") {
                    $("#automa_score_sheet_body").data(
                        "automa_points_per_dragon_card",
                        8
                    )
                }
                else {
                    $("#automa_score_sheet_body").data(
                        "automa_points_per_dragon_card",
                        7
                    )
                }

                recompute_automa_total_score()
            }
        )
    }
)

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

                    $("#cell_dragon_guild_fixed_vp").prop(
                        "required",
                        false
                    );

                    $("#cell_automa_dragon_guild_fixed_vp").val("");

                    recompute_automa_total_score();
                }
            }
        )
    }
)

// Recompute player total score
function recompute_player_total_score() {

    var total_score = parseNaNOrInt(
        $("#cell_player_markers_on_dragon_guild").val()
    ) + parseNaNOrInt(
        $("#cell_player_printed_on_dragons").val()
    ) + parseNaNOrInt(
        $("#cell_player_end_game_abilities").val()
    ) + parseNaNOrInt(
        $("#cell_player_eggs").val()
    ) + parseNaNOrInt(
        $("#cell_player_cached_resources").val()
    ) + parseNaNOrInt(
        $("#cell_player_tucked_cards").val()
    ) + parseNaNOrInt(
        $("#cell_player_public_objectives").val()
    ) + parseNaNOrInt(
        $("#cell_player_remaining_resources").val()
    );

    if (total_score == 0) {
        $("#cell_player_total_score").text("");
    }
    else {
        $("#cell_player_total_score").text(total_score);
    }
}

// Update player total score on player_markers_on_dragon_guild change
$(document).ready(
    function() {

        $("#cell_player_markers_on_dragon_guild").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)

// Update player total score on player_printed_on_dragons change
$(document).ready(
    function() {

        $("#cell_player_printed_on_dragons").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)

// Update player total score on player_end_game_abilities change
$(document).ready(
    function() {

        $("#cell_player_end_game_abilities").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)

// Update player total score on player_eggs change
$(document).ready(
    function() {

        $("#cell_player_eggs").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)

// Update player total score on player_cached_resources change
$(document).ready(
    function() {

        $("#cell_player_cached_resources").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)


// Update player total score on player_tucked_cards change
$(document).ready(
    function() {

        $("#cell_player_tucked_cards").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)

// Update player total score on player_public_objectives change
$(document).ready(
    function() {

        $("#cell_player_public_objectives").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)

// Update player total score on player_remaining_resources change
$(document).ready(
    function() {

        $("#cell_player_remaining_resources").on(
            "change",
            function() {
                recompute_player_total_score()
            }
        )
    }
)

// Recompute automa total score
function recompute_automa_total_score() {

    var total_score = $("#automa_score_sheet_body").data("automa_points_per_dragon_card") * parseNaNOrInt(
        $("#cell_automa_dragon_cards").val()
    ) + parseNaNOrInt(
        $("#cell_automa_cave_cards").val()
    ) + parseNaNOrInt(
        $("#cell_automa_steps_from_last_brown_space").val()
    ) + parseNaNOrInt(
        $("#cell_automa_public_objectives").val()
    ) + parseNaNOrInt(
        $("#cell_automa_dragon_guild_fixed_vp").val()
    )

    if (total_score == 0) {
        $("#cell_automa_total_score").text("");
    }
    else {
        $("#cell_automa_total_score").text(total_score);
    }
}

// Update automa total score on automa_dragon_cards change
$(document).ready(
    function() {

        $("#cell_automa_dragon_cards").on(
            "change",
            function() {
                recompute_automa_total_score()
            }
        )
    }
)

// Update automa total score on automa_cave_cards change
$(document).ready(
    function() {

        $("#cell_automa_cave_cards").on(
            "change",
            function() {
                recompute_automa_total_score()
            }
        )
    }
)

// Update automa total score on automa_steps_from_last_brown_space change
$(document).ready(
    function() {

        $("#cell_automa_steps_from_last_brown_space").on(
            "change",
            function() {
                recompute_automa_total_score()
            }
        )
    }
)

// Update automa total score on automa_public_objectives change
$(document).ready(
    function() {

        $("#cell_automa_public_objectives").on(
            "change",
            function() {
                recompute_automa_total_score()
            }
        )
    }
)

// Update automa total score on automa_dragon_guild_fixed_vp change
$(document).ready(
    function() {

        $("#cell_automa_dragon_guild_fixed_vp").on(
            "change",
            function() {
                recompute_automa_total_score()
            }
        )
    }
)