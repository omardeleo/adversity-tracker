export default function displayValues(state) {
    const feelingsDiv = document.querySelector(".feelings");
    const titleDiv = document.querySelector(".title");
    const storyDiv = document.querySelector(".story");
    titleDiv.innerText = state.title ? `Title: ${state.title}` : "Title:";
    storyDiv.innerText = state.story ? `Story: ${state.story}` : "Story:";

    feelingsDiv.innerHTML = "Feelings:";
    state.feelings.forEach(feeling => {
        const newDiv = document.createElement("div");
        const feelingVal = feeling.feeling ? feeling.feeling : "(blank)";
        const intensity = value => {
            if (value < 34) {
                return "mildly";
            } else if (value > 34 && value < 67) {
                return "moderately";
            } else {
                return "intensely";
            }
        };
        newDiv.innerHTML = `Feeling: ${feelingVal}, Intensity: ${
            feeling.sliderVal
            } (${intensity(feeling.sliderVal)})`;
        feelingsDiv.append(newDiv);
    });
}