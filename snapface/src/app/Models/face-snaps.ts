import { SnapeType } from "./snap-type.type";

export class face {

    id: string;

    location?: string;
    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public createdate: Date,
        public snaps: number,


    ) {
        this.id = crypto.randomUUID().substring(0, 8);
        console.log(this);
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    snap(snapType: SnapeType) {
        if (snapType === 'snap') {
            this.addSnap()
        } else if (snapType === 'unsnap') {
            this.removeSnap()
        }

    }

    setLocation(location: string) {
        this.location = location;
    }

    withLocation(location: string): face {
        this.setLocation(location);
        return this;

    }
}



