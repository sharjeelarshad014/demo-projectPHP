<!DOCTYPE HTML>
<html lang="en">

<head>
	<meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <?php include($_SERVER['DOCUMENT_ROOT']."/includes/brand-info.php"); ?>
	<title>Contact Us | <?php echo "$brandName";?></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<?php include($_SERVER['DOCUMENT_ROOT']."/includes/style.php"); ?>
</head>

<body>
	<!--[if lte IE 9]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->
	<?php include($_SERVER['DOCUMENT_ROOT']."/includes/header.php"); ?>

	<div class="banner gradient-1 ht-55">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="banner-content">
						<h3>Contact</h3>
						<h2><span class="cl-iPrimary">Escrow</span> <span class="cl-white">Consultancy Inc</span></h2>
						<div class="squ-border"><span></span></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="sec-ab stripe-3">
		<div class="flakes">
			<span class="flake fl1"></span>
		</div>
		<div class="container">
			<div class="contact-sec">
				<div class="row">
					<div class="col-lg-6">
						<div class="cont-sec">
							<div class="heading1 leftbd">
								<p>WE CATER YOUR DIGITAL NEEDS</p>
								<h4>Have A Question? <br>Drop Us A Message</h4>
							</div>
							<p>We are here to cater to all your advertising needs. One of our customer support executives will get in touch with you shortly.</p>
							<h5>Reach Us at:</h5>
							<p>Put life back into your online business strategies with our ingenious digital services that clicks the right audience interest.</p>
							<div class="fflex ico-row pt-3">
								<span class="round-ico">
									<img src="/assets/img/svg/ic-envelope.svg" alt="" class="js-tosvg">
								</span>
								<a href="mailto:info@<?php echo "$brandDomain";?>">info@<?php echo "$brandDomain";?></a>
							</div>
							<!-- <div class="fflex ico-row pb-3">
								<span class="round-ico">
									<img src="/assets/img/svg/ic-phone-alt.svg" alt="" class="js-tosvg">
								</span>
								<a href="tel:+1-xxx-xxx-xxxx">+1-xxx-xxx-xxxx</a>
							</div> -->
						</div>
					</div>
					<div class="col-lg-6 aos-anim">
						<div class="contact-form">
							<form action="#" data-toemail="info@escrowconsultancy.com" data-formapi="https://crmalert.gocrmlive.com/api/Projects/ContactUs" data-cc="" data-formname="Contact Us">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label class="label" for="firstname">First Name</label>
											<input type="text" class="form-control js-valGet" name="firstname" id="firstname" required>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label" for="lastname">Last Name</label>
											<input type="text" class="form-control js-valGet" name="lastname" id="lastname" required>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label class="label" for="cemail">Email</label>
											<input type="email" class="form-control js-valGet js-emailvalid" name="cemail" id="cemail" required>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="label" for="phonenumber">Phone Number</label>
											<input type="tel" class="form-control js-valGet js-numbervalid" name="phonenumber" id="phonenumber" required>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="label" for="cmessage">Message</label>
									<textarea class="form-control textarea js-valGet" name="cmessage" id="cmessage" required></textarea>
								</div>
								<div class="action-row">
									<button type="button" class="btn btn-secondary" onclick="getFormValues(this)">Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php"); ?>
	<?php include($_SERVER['DOCUMENT_ROOT']."/includes/scripts.php"); ?>
</body>
</html>