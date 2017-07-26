/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Common {

	export class UI_JoystickView extends fairygui.GComponent {
		public m_joystick_center:fairygui.GImage;
		public m_joystick:UI_circle;
		public m_joystick_touch:fairygui.GGraph;

		public static URL:string = "ui://y8fg084yuzwzb";

		public static createInstance():UI_JoystickView {
			return <UI_JoystickView><any>(fairygui.UIPackage.createObject("Common","JoystickView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_joystick_center = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_joystick = <UI_circle><any>(this.getChildAt(1));
			this.m_joystick_touch = <fairygui.GGraph><any>(this.getChildAt(2));
		}
	}
}