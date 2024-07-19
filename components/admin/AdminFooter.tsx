import {ModeToggle} from "@/components/theme-toggle";

export default function AdminFooter() {
    return (
        <footer className="bg-background text-foreground p-4">
            <ModeToggle />
        </footer>
    );
}