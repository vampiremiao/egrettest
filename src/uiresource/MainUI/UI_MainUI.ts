/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module MainUI {

	export class UI_MainUI extends fairygui.GComponent {
		public m_mainuiControl:fairygui.Controller;
		public m_txt_gold:fairygui.GTextField;
		public m_txt_money:fairygui.GTextField;
		public m_img_exp:fairygui.GImage;
		public m_txt_username:fairygui.GTextField;
		public m_txt_power:fairygui.GTextField;
		public m_txt_level:fairygui.GTextField;
		public m_btn_go:fairygui.GButton;

		public static URL:string = "ui://ppk5cl4ipw7fv";

		public static createInstance():UI_MainUI {
			return <UI_MainUI><any>(fairygui.UIPackage.createObject("MainUI","MainUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_mainuiControl = this.getControllerAt(0);
			this.m_txt_gold = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_txt_money = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_img_exp = <fairygui.GImage><any>(this.getChildAt(8));
			this.m_txt_username = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_txt_power = <fairygui.GTextField><any>(this.getChildAt(10));
			this.m_txt_level = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_btn_go = <fairygui.GButton><any>(this.getChildAt(14));
		}
	}
}