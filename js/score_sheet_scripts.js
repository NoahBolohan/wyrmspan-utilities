// Toggle n_players modal
$(document).ready(
    function () {

        $('#modal_n_players').modal('toggle');
    }
);

// Create n_players columns
$(document).ready(
    function() {

        $.each(
            Array.from(Array(4), (e,i)=>i+2),
            function(key,value) {
                $(`#col_button_${value}_players`).on(
                    "click",
                    function() {

                        var width_p = 55;

                        $("#score_sheet_body").data(
                            "n_players",
                            value
                        );
                        generate_row_headers(width_p);
                        generate_n_score_columns(value, (100-width_p)/value);
                        $(`#modal_n_players`).modal("hide");
                        custom_show_div("#row_score_sheet");
                    }
                );
            }
        )
    }
)

function generate_row_headers(width_p) {

    // Player names
    $("<td>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%;`
        }
    ).appendTo("#row_player_names");

    // Markers on the dragon guild
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "Markers on the dragon guild"
    ).appendTo("#row_markers_on_dragon_guild");

    // Amount printed on dragons
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "&#x1F409; printed on dragons"
    ).appendTo("#row_printed_on_dragons");

    // End-game abilities
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "&#x1F409; from end-game abilities (&#x1F3F4;)"
    ).appendTo("#row_end-game_abilities");

    // Eggs
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "1 &#x1F409; per egg"
    ).appendTo("#row_eggs");

    // Cached resources
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "1 &#x1F409; per cached resource"
    ).appendTo("#row_cached_resources");

    // Tucked cards
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "1 &#x1F409; per tucked card"
    ).appendTo("#row_tucked_cards");

    // Public objectives
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "&#x1F409; from public objectives"
    ).appendTo("#row_public_objectives");

    // Remaining resources
    $("<th>").attr(
        {
            class : "bg-info",
            style : `width:${width_p}%`,
            scope : "row"
        }
    ).text(
        "&#x1F409; from remaining coins & items"
    ).appendTo("#row_remaining_resources");

    // Total
    $("<td>").attr(
        {
            class : "bg-success",
            style : `width:${width_p}%;`
        }
    ).text(
        "Total"
    ).appendTo("#row_total");
}

function generate_n_score_columns(n_players, width_p) {
    for (var i=1; i <= n_players; i++) {

        // Player names
        var cell = $("<th>").attr(
            {
                class : "bg-info",
                id : `player_${i}_name`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_player_names");
        
        var div = $("<div>").attr(
            {
                class : "row p-0 justify-content-center margin_auto",
                id : `row_player_${i}_name`
            }
        ).appendTo(cell);

        $("<input>").attr(
            {
                class : "col-12 input-vertical",
                type : "text",
                id : `input_player_${i}_name`,
                name : `player_${i}_name`,
                placeholder : `Player ${i}`,
                style : "height:80px;"
            }
        ).appendTo(div);

        // markers on dragon guild
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_markers_on_dragon_guild`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_markers_on_dragon_guild");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_markers_on_dragon_guild`,
                name : `player_${i}_markers_on_dragon_guild`
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Printed on dragons
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_printed_on_dragons`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_printed_on_dragons");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_printed_on_dragons`,
                name : `player_${i}_printed_on_dragons`
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // End-game abilities
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_end-game_abilities`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_end-game_abilities");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_end-game_abilities`,
                name : `player_${i}_end-game_abilities`
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Eggs
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_eggs`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_eggs");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_eggs`,
                name : `player_${i}_eggs`
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Cached resources
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_cached_resources`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_cached_resources");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_cached_resources`,
                name : `player_${i}_cached_resources`
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Tucked cards
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_tucked_cards`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_tucked_cards");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_tucked_cards`,
                name : `player_${i}_tucked_cards`
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Public objectives
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_public_objectives`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_public_objectives");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_public_objectives`,
                name : `player_${i}_public_objectives`
            }
        ).appendTo(cell);

        // Remaining resources
        var cell = $("<td>").attr(
            {
                class : "bg-info",
                id : `col_player_${i}_remaining_resources`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_remaining_resources");

        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_remaining_resources`,
                name : `player_${i}_remaining_resources`
            }
        ).appendTo(cell);
        

        // Total
        var cell = $("<td>").attr(
            {
                class : "bg-success",
                id : `col_player_${i}_total_score`,
                style : `width:${width_p}%`
            }
        ).appendTo("#row_total");
        
        $("<div>").attr(
            {
                type : "number",
                id : `div_player_${i}_total_score`
            }
        ).appendTo(cell);

        // Total to submit
        $("<input>").attr(
            {
                type : "number",
                id : `submit_player_${i}_total_score`,
                name : `player_${i}_total_score`
            }
        ).appendTo($("#data_to_submit"));

        assign_player_event_listeners(i);
    }
}

// Recompute player total score
function recompute_player_total_score(i) {

    var total_score = parseNaNOrInt(
        $(`#input_player_${i}_markers_on_dragon_guild`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_printed_on_dragons`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_end-game_abilities`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_eggs`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_cached_resources`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_tucked_cards`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_public_objectives`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_remaining_resources`).val()
    );

    if (total_score == 0) {
        $(`#div_player_${i}_total_score`).text("");
    }
    else {
        $(`#div_player_${i}_total_score`).text(total_score);
    }
}

function assign_player_event_listeners(i) {

    // Update player total score on player_markers_on_dragon_guild change
    $(`#input_player_${i}_markers_on_dragon_guild`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on printed_on_dragons change
    $(`#input_player_${i}_printed_on_dragons`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on end-game_abilities change
    $(`#input_player_${i}_end-game_abilities`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on eggs change
    $(`#input_player_${i}_eggs`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on cached_resources change
    $(`#input_player_${i}_cached_resources`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on tucked_cards change
    $(`#input_player_${i}_tucked_cards`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on public_objectives change
    $(`#input_player_${i}_public_objectives`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on remaining_resources change
    $(`#input_player_${i}_remaining_resources`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )
}

function reset_inputs_for_all_players() {

    for (var i=1; i <= $("#score_sheet_body").data("n_players"); i++) {

        $(`#input_player_${i}_name`).val("");
        $(`#input_player_${i}_markers_on_dragon_guild`).val("");
        $(`#input_player_${i}_printed_on_dragons`).val("");
        $(`#input_player_${i}_end-game_abilities`).val("");
        $(`#input_player_${i}_eggs`).val("");
        $(`#input_player_${i}_cached_resources`).val("");
        $(`#input_player_${i}_tucked_cards`).val("");
        $(`#input_player_${i}_public_objectives`).val("");
        $(`#input_player_${i}_remaining_resources`).val("");

        $(`#div_player_${i}_total_score`).text("");
    }
}

// Reset sheet on reset button click
$(document).ready(

    function () {
        $("#button_reset_sheet").on(
            "click",
            function () {
                reset_inputs_for_all_players()
            }
        )
    }
)

// Populate certain divs before submitting form
function populate_form_data() {

    // Player names
    for (var i=1; i <= $("#score_sheet_body").data("n_players"); i++) {
         if ($(`#input_player_${i}_name`).val() == "") {
            $(`#input_player_${i}_name`).val(`Player ${i}`);
         }
    }

    // Player total scores
    for (var i=1; i <= $("#score_sheet_body").data("n_players"); i++) {
        $(`#submit_player_${i}_total_score`).val(
            $(`#div_player_${i}_total_score`).text()
        )
    }

    // Number of players
    $("#submit_n_players").val(
        $("#score_sheet_body").data("n_players")
    );
}