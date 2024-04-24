import "./style.css";
import ProductDescription from "../../fragments/productDescription";

export default function Description() {
    return(
        <div>
            <div id="description">
                <div id="description-titles">
                    <h2>Description</h2>
                    <h2 id="additional-information">Additional Information</h2>
                </div>
                <ProductDescription
                    bigDescription="Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."
                />
            </div>
        </div>
    );
}