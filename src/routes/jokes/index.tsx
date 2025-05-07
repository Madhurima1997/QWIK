import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$, server$ } from "@builder.io/qwik-city";

export const useDadJoke = routeLoader$(async() => {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json'}
    });

    return (await response.json()) as {
        id: string;
        status: number;
        joke: string;
      };
});

export const postVoteForJoke = routeAction$((val) => {
    console.log(`My Vote: JokeID: ${val.id} Vote: ${val.vote}`);
});

export default component$(()=> {

    const dadJokeSignal = useDadJoke();
    const dadJokeAction = postVoteForJoke();

    const isFavoriteSignal = useSignal(false);

    const id = dadJokeSignal.value.id;

    useTask$(({track}) => {
        track(()=> isFavoriteSignal.value);
        console.log('Both client and server ',isFavoriteSignal.value);

        server$(() => {
            console.log('Just Server rendering ', isFavoriteSignal.value);
        })();
    });
    return (
        <section>
            <section class="section bright">
                <p>{dadJokeSignal.value.joke}</p>
                <button name="vote" value="up" onClick$={() => dadJokeAction.submit({id:id, vote:'up'})}>👍</button>
                <button name="vote" value="down" onClick$={() => dadJokeAction.submit({id:id, vote:'down'})}>👎</button>
                <button onClick$={() => (isFavoriteSignal.value = !isFavoriteSignal.value)}>
                    {isFavoriteSignal.value ? '❤️' : '🤍'}
                </button>
            </section>   
        </section>
    )
});