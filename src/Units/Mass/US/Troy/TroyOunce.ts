/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {DerivedUnit} from "../../../DerivedUnit";
import {TroyPound} from "./TroyPound";

export class TroyOunce extends DerivedUnit {
    public baseUnit: TroyPound = new TroyPound(this.value / 12);

    protected baseUnitConverter = {
        TroyPound: (): TroyPound => this.baseUnit,
    };
}
