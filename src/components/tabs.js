import "./tabs.css"

function tabs() {
    return (
        <div>
            <mat-tab-group mat-align-tabs="center">
                <mat-tab label="First">Content 1</mat-tab>
                <mat-tab label="Second">Content 2</mat-tab>
                <mat-tab label="Third">Content 3</mat-tab>
                <mat-tab label="Fourth">Content 4</mat-tab>
            </mat-tab-group>
        </div>
    );
}
export default tabs;