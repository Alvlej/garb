<script>
    import { db } from "../../firebase";
    import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

    let märke = "";
    let smak = "";
    let volym = "";
    let loggbok = [];

    const loggbokRef = collection(db, "loggbok");

    // Hämta data från Firestore när sidan laddas
    onMount(async () => {
        const snapshot = await getDocs(loggbokRef);
        loggbok = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Realtidsuppdateringar
        onSnapshot(loggbokRef, (snapshot) => {
            loggbok = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });
    });

    async function logga(event) {
        event.preventDefault();
        if (märke && smak && volym) {
            await addDoc(loggbokRef, { märke, smak, volym });
            märke = "";
            smak = "";
            volym = "";
        }
    }
</script>

<h1>Loggbok</h1>
<p>Här kan skriva in vilka energidrycker du dricker!</p>

<div class="container">
    <form on:submit={logga}>
        <label for="märke">Märke:</label>
        <input type="text" id="märke" bind:value={märke} />

        <label for="smak">Smak:</label>
        <input type="text" id="smak" bind:value={smak} />

        <label for="volym">Volym (ml):</label>
        <input type="text" id="volym" bind:value={volym} />

        <input type="submit" value="Spara" />
    </form>

    <h2>Loggade drycker:</h2>
    <ul>
        {#each loggbok as dryck, index}
            <li>
                <strong>{index + 1}.</strong> Märke: {dryck.märke}, Smak: {dryck.smak}, Volym: {dryck.volym} ml
            </li>
        {/each}
    </ul>
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 30px;
        padding: 20px;
    }

    h1 {
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: black;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 10px 0;
    }
</style>